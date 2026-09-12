// app/loading.js
export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand mx-auto mb-4"></div>
        <p className="text-ink-muted">Loading ModgillTravels...</p>
      </div>
    </div>
  );
}
