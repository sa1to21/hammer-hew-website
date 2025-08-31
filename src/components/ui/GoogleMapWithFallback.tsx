import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

interface GoogleMapWithFallbackProps {
  className?: string;
}

const GoogleMapWithFallback: React.FC<GoogleMapWithFallbackProps> = ({ className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  // Philadelphia business location
  const businessLocation = {
    lat: 39.9670,
    lng: -75.1356,
    name: "Hammer & Hew LLC",
    address: "1112 N Hancock St, Philadelphia, PA 19123",
    phone: "(917) 250-2222"
  };

  const loadGoogleMapsScript = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      setMapError("API key not configured");
      setIsLoading(false);
      return;
    }

    // Check if script already loaded
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=en&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Set global callback
    window.initMap = initializeMap;
    
    script.onerror = () => {
      setMapError("Failed to load Google Maps");
      setIsLoading(false);
    };

    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapRef.current || !window.google) {
      setMapError("Map container not available");
      setIsLoading(false);
      return;
    }

    try {
      // Clean map style - hide POI markers
      const cleanStyle = [
        {
          "featureType": "poi",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{"visibility": "on"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels",
          "stylers": [{"visibility": "off"}]
        }
      ];

      // Create map with clean theme - center adjusted left to show service area better
      const mapCenter = {
        lat: businessLocation.lat,
        lng: businessLocation.lng - 0.08  // Move camera left (west) by 0.08 degrees
      };
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 11,
        styles: cleanStyle,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        },
        fullscreenControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP
        }
      });

      // Create marker using company logo
      const marker = new window.google.maps.Marker({
        position: businessLocation,
        map: map,
        title: businessLocation.name,
        icon: {
          url: '/logo.png',
          scaledSize: new window.google.maps.Size(44, 49),
          anchor: new window.google.maps.Point(22, 24.5),
          optimized: false
        }
      });

      // Simple info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif; min-width: 220px;">
            <h3 style="margin: 0 0 4px 0; color: #1e293b; font-size: 16px; font-weight: 600;">
              ${businessLocation.name}
            </h3>
            <p style="margin: 0 0 4px 0; color: #64748b; font-size: 13px;">
              Professional Deck Construction & Restoration
            </p>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px;">
              📍 ${businessLocation.address}
            </p>
            <div style="text-align: center;">
              <a href="tel:${businessLocation.phone}" 
                 style="background: #059669; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; display: inline-block;">
                📞 ${businessLocation.phone}
              </a>
            </div>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Pennsylvania service area polygon - custom boundary
      const paServiceArea = new window.google.maps.Polygon({
        paths: [
          {lat: 39.885779, lng: -75.145488},
          {lat: 39.800513, lng: -75.414954},
          {lat: 39.640982, lng: -75.613379},
          {lat: 39.760978, lng: -75.768526},
          {lat: 39.911661, lng: -75.872302},
          {lat: 40.143008, lng: -75.942340},
          {lat: 40.286678, lng: -75.879168},
          {lat: 40.401812, lng: -75.674548},
          {lat: 40.500045, lng: -75.450701},
          {lat: 40.567887, lng: -75.191149},
          {lat: 40.413315, lng: -75.046954},
          {lat: 40.152148, lng: -74.730513},
          {lat: 40.074429, lng: -74.955733},
          {lat: 39.887032, lng: -75.142222}
        ],
        strokeColor: '#059669',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#059669',
        fillOpacity: 0.12,
        map: map
      });

      // Add hover effect to service area
      paServiceArea.addListener('mouseover', () => {
        paServiceArea.setOptions({
          fillOpacity: 0.2,
          strokeOpacity: 1.0
        });
      });

      paServiceArea.addListener('mouseout', () => {
        paServiceArea.setOptions({
          fillOpacity: 0.12,
          strokeOpacity: 0.8
        });
      });


      setIsLoading(false);
    } catch (error: any) {
      console.error('Error initializing map:', error);
      
      let errorMessage = "Error loading map";
      if (error?.message?.includes('API key')) {
        errorMessage = "Invalid API key";
      } else if (error?.message?.includes('quota')) {
        errorMessage = "Maps quota exceeded";
      } else if (error?.message?.includes('billing')) {
        errorMessage = "Billing not enabled";
      }
      
      setMapError(errorMessage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGoogleMapsScript();
    
    return () => {
      if ((window as any).initMap) {
        delete (window as any).initMap;
      }
    };
  }, []);

  // If there's an error, show the Service Area card with same style as other contact cards
  if (mapError) {
    return (
      <a
        href="#"
        className={`group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg block ${className}`}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Service Area
            </h3>
            <p className="text-gray-800 font-medium mb-1">
              Philadelphia, Pennsylvania
            </p>
            <p className="text-sm text-gray-500">
              Free consultations within 25 miles
            </p>
          </div>
        </div>
      </a>
    );
  }

  // Show interactive map (larger size)
  return (
    <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg ${className}`} style={{ height: '450px' }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin mx-auto mb-2" />
            <p className="text-gray-300 text-sm">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default GoogleMapWithFallback;