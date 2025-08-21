import WarningAmberIcon from '@mui/icons-material/WarningAmber';
export default function CompactBookingTerms() {
  return (
    <div className="my-4 max-w-3xl mx-auto px-4">
      <div className="bg-gradient-to-r from-red-800 to-red-900 border-l-4 border-yellow-500 rounded-lg p-4 text-white shadow-lg">
        <div className="flex items-start gap-3">
          <WarningAmberIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-yellow-300 mb-2">Booking Terms</h4>
            <div className="text-sm space-y-2">
              <p>
                <strong>Advance:</strong> Driver will collect ₹200 advance for confirmation.
              </p>
              <div>
                  <p className='flex flex-col'>
                    <strong>Cancellation:</strong>
                    <span className="text-red-300"> Your cancellation = No refund</span>
                    <span className="text-green-300"> Our cancellation = ₹200 + ₹100 compensation</span>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
