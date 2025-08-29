import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, MousePointer } from 'lucide-react';
import { analytics } from '../../utils/analytics';
import { getABTestAnalytics } from '../../utils/abTestsConfig';

// This component is for development/admin use only
const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [abTestData, setABTestData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show dashboard only in development
    if (import.meta.env.DEV) {
      setIsVisible(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    const analyticsData = analytics.getAnalyticsData();
    const abAnalytics = getABTestAnalytics();
    setData(analyticsData);
    setABTestData(abAnalytics);
  };

  const clearData = () => {
    analytics.clearData();
    localStorage.removeItem('ab_test_events');
    localStorage.removeItem('ab_test_variants');
    setData({ events: [], metrics: [], abTests: [] });
    setABTestData({});
  };

  if (!isVisible || !data) return null;

  const totalEvents = data.events.length;
  const conversions = data.events.filter((e: any) => e.category === 'conversion').length;
  const interactions = data.events.filter((e: any) => e.category === 'engagement').length;
  const conversionRate = totalEvents > 0 ? ((conversions / totalEvents) * 100).toFixed(1) : '0.0';

  // Performance metrics summary
  const avgLoadTime = data.metrics.length > 0 
    ? (data.metrics.reduce((acc: number, m: any) => acc + m.value, 0) / data.metrics.length).toFixed(0)
    : 0;

  return (
    <motion.div
      className="fixed bottom-20 left-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-40 max-h-96 overflow-y-auto"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics Dashboard
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={loadData}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Refresh
            </button>
            <button
              onClick={clearData}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded">
            <div className="flex items-center">
              <Users className="w-4 h-4 text-blue-600 mr-2" />
              <div>
                <p className="text-xs text-blue-600">Events</p>
                <p className="font-bold text-blue-800">{totalEvents}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
              <div>
                <p className="text-xs text-green-600">Conversion Rate</p>
                <p className="font-bold text-green-800">{conversionRate}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 rounded">
            <div className="flex items-center">
              <MousePointer className="w-4 h-4 text-purple-600 mr-2" />
              <div>
                <p className="text-xs text-purple-600">Interactions</p>
                <p className="font-bold text-purple-800">{interactions}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-3 rounded">
            <div className="flex items-center">
              <BarChart3 className="w-4 h-4 text-amber-600 mr-2" />
              <div>
                <p className="text-xs text-amber-600">Avg Load (ms)</p>
                <p className="font-bold text-amber-800">{avgLoadTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Recent Events</h4>
          <div className="space-y-1 max-h-24 overflow-y-auto">
            {data.events.slice(-5).reverse().map((event: any, index: number) => (
              <div key={index} className="text-xs bg-gray-50 p-2 rounded">
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                  event.category === 'conversion' ? 'bg-green-500' : 
                  event.category === 'engagement' ? 'bg-blue-500' : 'bg-gray-500'
                }`}></span>
                <span className="font-medium">{event.action}</span>
                {event.label && <span className="text-gray-600"> - {event.label}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* A/B Test Results */}
        {Object.keys(abTestData).length > 0 && (
          <div>
            <h4 className="font-medium text-gray-700 mb-2">A/B Test Results</h4>
            <div className="space-y-2">
              {Object.entries(abTestData).map(([testId, data]: [string, any]) => (
                <div key={testId} className="text-xs">
                  <p className="font-medium text-gray-600 mb-1">{testId}</p>
                  {Object.entries(data).map(([variant, stats]: [string, any]) => (
                    <div key={variant} className="flex justify-between bg-gray-50 p-1 rounded mb-1">
                      <span>{variant}</span>
                      <span className="font-mono">
                        {stats.views}v / {stats.conversions}c ({stats.conversionRate}%)
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-2 border-t border-gray-200 text-xs text-gray-500 text-center">
        Development Mode Only
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;