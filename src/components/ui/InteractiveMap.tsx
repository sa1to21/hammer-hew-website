import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

// Google Maps types
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface InteractiveMapProps {
  className?: string;
  height?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  className = "", 
  height = "400px" 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  // Philadelphia business location
  const businessLocation = {
    lat: 39.9526,
    lng: -75.1652,
    name: "Hammer & Hew LLC",
    address: "Philadelphia, PA",
    phone: "(917) 250-2222"
  };

  const loadGoogleMapsScript = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      setMapError("Google Maps API key not configured");
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
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
      setMapError("Map container or Google Maps not available");
      setIsLoading(false);
      return;
    }

    try {
      // Create map
      const map = new window.google.maps.Map(mapRef.current, {
        center: businessLocation,
        zoom: 11,
        styles: [
          // Custom map styling for brand consistency
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        }
      });

      // Create custom marker
      const marker = new window.google.maps.Marker({
        position: businessLocation,
        map: map,
        title: businessLocation.name,
        icon: {
          path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
          fillColor: "#059669", // emerald-600
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
          scale: 1.5,
          anchor: new window.google.maps.Point(12, 24)
        }
      });

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1e293b; font-size: 16px; font-weight: 600;">
              ${businessLocation.name}
            </h3>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">
              Professional deck construction & restoration
            </p>
            <div style="display: flex; align-items: center; margin-bottom: 8px; color: #64748b; font-size: 14px;">
              <span style="margin-right: 8px;">📍</span>
              ${businessLocation.address}
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 12px; color: #64748b; font-size: 14px;">
              <span style="margin-right: 8px;">📞</span>
              <a href="tel:${businessLocation.phone}" style="color: #059669; text-decoration: none;">
                ${businessLocation.phone}
              </a>
            </div>
            <div style="text-align: center;">
              <a href="tel:${businessLocation.phone}" 
                 style="background: #059669; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500;">
                Call Now for Free Estimate
              </a>
            </div>
          </div>
        `
      });

      // Show info window on marker click
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Service area circle (25 mile radius)
      const serviceArea = new window.google.maps.Circle({
        center: businessLocation,
        radius: 40233.6, // 25 miles in meters
        fillColor: '#059669',
        fillOpacity: 0.1,
        strokeColor: '#059669',
        strokeOpacity: 0.3,
        strokeWeight: 2,
        map: map
      });

      setIsLoading(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError("Error initializing map");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGoogleMapsScript();
    
    // Cleanup function
    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  if (mapError) {
    return (
      <div className={`bg-gray-100 rounded-2xl flex items-center justify-center ${className}`} style={{ height }}>
        <div className="text-center p-6">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 text-sm">{mapError}</p>
          <p className="text-gray-500 text-xs mt-2">Configure your Google Maps API key</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`} style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default InteractiveMap;