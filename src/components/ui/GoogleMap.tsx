import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  className = "", 
  height = "400px"
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  // Hammer & Hew LLC business location
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Set global callback
    window.initMap = initializeMap;
    
    script.onerror = () => {
      setMapError("Failed to load Google Maps. Please check your internet connection.");
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
      // Minimalist map style
      const minimalStyle = [
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [{"visibility": "simplified"}]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{"visibility": "simplified"}]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "water",
          "stylers": [{"color": "#f0f9ff"}]
        },
        {
          "featureType": "landscape",
          "stylers": [{"color": "#fafafa"}]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{"color": "#ffffff"}]
        }
      ];

      // Create map
      const map = new window.google.maps.Map(mapRef.current, {
        center: businessLocation,
        zoom: 12,
        styles: minimalStyle,
        disableDefaultUI: true, // Minimal controls
        zoomControl: true,
        fullscreenControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        },
        fullscreenControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP
        }
      });

      // Create marker using company logo from public folder
      const marker = new window.google.maps.Marker({
        position: businessLocation,
        map: map,
        title: businessLocation.name,
        icon: {
          url: '/logo.png',  // Use the actual company logo
          scaledSize: new window.google.maps.Size(60, 60), // Increased size for better visibility
          anchor: new window.google.maps.Point(30, 30), // Center anchor for square logo
          optimized: false // Ensures better rendering quality
        }
      });

      // Simple info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 16px; font-family: system-ui, -apple-system, sans-serif; min-width: 220px;">
            <h3 style="margin: 0 0 8px 0; color: #1e293b; font-size: 18px; font-weight: 600;">
              ${businessLocation.name}
            </h3>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">
              Professional Deck Construction & Restoration
            </p>
            <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px;">
              📍 ${businessLocation.address}
            </p>
            <div style="text-align: center;">
              <a href="tel:${businessLocation.phone}" 
                 style="background: #059669; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 500; display: inline-block;">
                📞 ${businessLocation.phone}
              </a>
            </div>
          </div>
        `
      });

      // Show info window on marker click
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      setIsLoading(false);
    } catch (error: any) {
      console.error('Error initializing map:', error);
      
      // More specific error messages
      let errorMessage = "Error loading map";
      if (error?.message?.includes('API key')) {
        errorMessage = "Invalid Google Maps API key. Please check your configuration.";
      } else if (error?.message?.includes('quota')) {
        errorMessage = "Google Maps quota exceeded. Please check your billing settings.";
      } else if (error?.message?.includes('billing')) {
        errorMessage = "Google Maps billing not enabled. Please activate billing in Google Cloud Console.";
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

  if (mapError) {
    return (
      <div className={`bg-gradient-to-br from-emerald-50 to-slate-100 rounded-2xl flex items-center justify-center ${className}`} style={{ height }}>
        <div className="text-center p-6 max-w-md">
          <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          
          {/* Different messages based on error type */}
          {mapError === "API key not configured" ? (
            <>
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                Google Maps Ready
              </h3>
              <p className="text-slate-600 mb-3">
                Configure your API key to display the interactive map
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-sm text-slate-500 mb-4">
                <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                  VITE_GOOGLE_MAPS_API_KEY=your_key_here
                </code>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                Map Temporarily Unavailable
              </h3>
              <p className="text-slate-600 mb-3">
                {mapError}
              </p>
            </>
          )}

          {/* Fallback contact info */}
          <div className="bg-white/90 rounded-lg p-4 border border-emerald-100">
            <h4 className="font-semibold text-slate-800 mb-2">📍 Our Location</h4>
            <p className="text-sm text-slate-600 mb-2">
              {businessLocation.address}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a 
                href={`tel:${businessLocation.phone}`}
                className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium text-center"
              >
                📞 Call Us
              </a>
              <a 
                href={`https://maps.google.com/maps?q=${encodeURIComponent(businessLocation.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium text-center"
              >
                🗺️ View on Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-lg ${className}`} style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
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

export default GoogleMap;