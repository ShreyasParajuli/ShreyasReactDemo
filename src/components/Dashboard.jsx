import React from 'react';

// Reusable StatCard component utilizing theme variables
function StatCard({ title, value, label, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 border border-[var(--color-border-primary)] hover:border-[var(--color-brand)] transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold tracking-wider uppercase text-[var(--color-text-secondary)]">{title}</span>
        <div className="p-2 bg-[var(--color-bg-primary)] rounded-lg text-[var(--color-brand)]">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight">{value}</span>
        <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)] px-2 py-0.5 rounded">{label}</span>
      </div>
    </div>
  );
}

export function Dashboard({ vulnerabilities = [] }) {
  // Dynamically calculate metrics based on live vulnerabilities array
  const totalAssessments = new Set(vulnerabilities.map(v => v.project)).size;
  
  const openVulns = vulnerabilities.filter(
    v => v.status === 'Open' || v.status === 'In Progress' || v.status === 'Retest Pending'
  ).length;
  
  const resolvedVulns = vulnerabilities.filter(v => v.status === 'Resolved').length;
  const criticalVulns = vulnerabilities.filter(v => v.severity === 'Critical').length;
  const mediumVulns = vulnerabilities.filter(v => v.severity === 'Medium').length;
  const lowVulns = vulnerabilities.filter(v => v.severity === 'Low').length;

  const recentAssessments = [];
  const recentNotes = [];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] p-6 md:p-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-[var(--color-border-primary)]">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Security Intelligence Dashboard
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-1 text-sm md:text-base">
            Vulnerability metrics, recent assessments, and team activity logs.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-[var(--color-border-primary)] shadow-sm">
          <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">Live Monitoring</span>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Assessments"
          value={totalAssessments}
          label="Active Projects"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />

        <StatCard
          title="Open Vulnerabilities"
          value={openVulns}
          label="Active Findings"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
        />

        <StatCard
          title="Resolved Vulnerabilities"
          value={resolvedVulns}
          label="Patched findings"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <StatCard
          title="Critical Findings"
          value={criticalVulns}
          label="Urgent Action Required"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />

        <StatCard
          title="Medium Findings"
          value={mediumVulns}
          label="Mitigation Scheduled"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <StatCard
          title="Low Findings"
          value={lowVulns}
          label="Low Severity Risks"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Main Grid: Recent Assessments & Recent Notes */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Recent Assessments Section */}
        <div className="xl:col-span-2 bg-white border border-[var(--color-border-primary)] rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Recent Assessments</h2>
              <p className="text-[var(--color-text-secondary)] text-xs mt-0.5">Overview of the latest evaluations conducted.</p>
            </div>
          </div>

          {recentAssessments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 border border-dashed border-[var(--color-border-primary)] rounded-lg">
              <svg className="w-8 h-8 text-[var(--color-text-secondary)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-sm text-[var(--color-text-secondary)]">No assessments recorded.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border-primary)] text-[var(--color-text-secondary)] text-xs font-bold uppercase tracking-wider">
                    <th className="pb-3 pl-2">ID</th>
                    <th className="pb-3">Assessment Name</th>
                    <th className="pb-3">Target Scope</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3 text-center">Score</th>
                    <th className="pb-3 text-right pr-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty */}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Notes Section */}
        <div className="bg-white border border-[var(--color-border-primary)] rounded-xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Recent Notes</h2>
              <p className="text-[var(--color-text-secondary)] text-xs mt-0.5">Internal team comments and updates.</p>
            </div>
          </div>

          {recentNotes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 border border-dashed border-[var(--color-border-primary)] rounded-lg flex-1">
              <svg className="w-8 h-8 text-[var(--color-text-secondary)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-sm text-[var(--color-text-secondary)]">No notes available.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Empty */}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
