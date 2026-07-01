import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { ReadVulnerabilities } from './components/ReadVulnerabilities';
import { VulnerabilityGrid } from './components/VulnerabilityGrid';
import { CreateVulnerabilityModal } from './components/CreateVulnerabilityModal';
import logo from './assets/logo.svg';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Central state array for vulnerabilities (populated with initial data)
  const [vulnerabilities, setVulnerabilities] = useState([
    {
      id: 'VULN-2026-001',
      title: 'SQL Injection in Login Endpoint',
      category: 'SQL Injection',
      severity: 'Critical',
      status: 'Open',
      target: 'https://auth.company.com/v2/login',
      cwe: 'CWE-89',
      cve: 'CVE-2026-0001',
      discoveryDate: '2026-06-29',
      description: 'The user login form fails to sanitize input parameters properly, allowing arbitrary SQL execution on the authentication database.',
    },
    {
      id: 'VULN-2026-002',
      title: 'Stored Cross-Site Scripting (XSS) in Comment Box',
      category: 'Cross-Site Scripting (XSS)',
      severity: 'High',
      status: 'In Progress',
      target: 'https://portal.company.com/dashboard/feed',
      cwe: 'CWE-79',
      cve: 'CVE-2026-0002',
      discoveryDate: '2026-06-27',
      description: 'User-provided HTML elements inside the comment post fields are stored in the database and rendered back unsanitized to other accounts.',
    },
    {
      id: 'VULN-2026-003',
      title: 'Broken Access Control on User Settings API',
      category: 'Broken Access Control',
      severity: 'Medium',
      status: 'Retest Pending',
      target: 'https://api.company.com/v1/user/settings',
      cwe: 'CWE-285',
      cve: 'CVE-2026-0003',
      discoveryDate: '2026-06-25',
      description: 'The API endpoints do not validate the relationship between the session token tenant parameters and user settings request keys.',
    },
    {
      id: 'VULN-2026-004',
      title: 'Outdated OpenSSL Dependency',
      category: 'Authentication',
      severity: 'Low',
      status: 'Resolved',
      target: 'Production Web Application Servers',
      cwe: 'CWE-937',
      cve: 'CVE-2026-0004',
      discoveryDate: '2026-06-20',
      description: 'Production infrastructure images are using an outdated version of OpenSSL vulnerable to memory corruption side-channel attacks.',
    },
  ]);

  // Handler: Add new vulnerability finding
  const handleAddVulnerability = (newVuln) => {
    setVulnerabilities((prev) => [newVuln, ...prev]);
  };

  // Handler: Update status of vulnerability finding
  const handleUpdateStatus = (id, newStatus) => {
    setVulnerabilities((prev) =>
      prev.map((vuln) => (vuln.id === id ? { ...vuln, status: newStatus } : vuln))
    );
  };

  // Handler: Delete vulnerability finding
  const handleDeleteVulnerability = (id) => {
    setVulnerabilities((prev) => prev.filter((vuln) => vuln.id !== id));
  };

  return (
    <div className="vms-layout relative">
      {/* Sidebar Navigation */}
      <aside className="vms-sidebar">
        {/* Logo/Brand */}
        <div className="p-6 border-b border-[var(--color-border-primary)] flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center p-1 border border-[var(--color-border-primary)] shadow-sm">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-bold text-[var(--color-text-primary)] tracking-wider text-lg">AegisSec</span>
            <span className="block text-[10px] text-[var(--color-text-secondary)] font-bold uppercase tracking-widest">VMS Portal</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1.5">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`vms-nav-btn ${
              activeTab === 'dashboard'
                ? 'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)]'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
            </svg>
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('manage')}
            className={`vms-nav-btn ${
              activeTab === 'manage'
                ? 'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)]'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Vulnerabilities</span>
          </button>
        </nav>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-[var(--color-border-primary)]">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[var(--color-border-primary)] transition-colors cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-[var(--color-brand)] flex items-center justify-center font-bold text-white text-sm">
              JD
            </div>
            <div>
              <span className="block text-sm font-bold text-[var(--color-text-primary)]">John Doe</span>
              <span className="block text-[11px] text-[var(--color-text-secondary)]">Security Analyst</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[var(--color-bg-primary)]">
        {activeTab === 'dashboard' ? (
          <div className="relative">
            {/* Add Button at the top right of the dashboard view */}
            <div className="absolute top-8 right-6 md:right-8 z-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-xs md:text-sm font-bold py-2 px-3 md:py-2.5 md:px-4 rounded-lg transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                </svg>
                <span>Add Vulnerability</span>
              </button>
            </div>
            {/* Pass state array so the dashboard metrics compute dynamically if needed, or maintain static design */}
            <Dashboard vulnerabilities={vulnerabilities} />
          </div>
        ) : (
          <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Vulnerability Management
                </h1>
                <p className="text-[var(--color-text-secondary)] mt-1">
                  View and manage security findings dynamically. Change statuses and delete items inline.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-xs md:text-sm font-bold py-2 px-3 md:py-2.5 md:px-4 rounded-lg transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add Vulnerability</span>
                </button>
              </div>
            </div>
            
            {/* Main Interactive Grid & Table views */}
            <div className="space-y-8">
              <ReadVulnerabilities
                vulnerabilities={vulnerabilities}
                onUpdateStatus={handleUpdateStatus}
                onDelete={handleDeleteVulnerability}
              />
              <VulnerabilityGrid
                vulnerabilities={vulnerabilities}
                onUpdateStatus={handleUpdateStatus}
                onDelete={handleDeleteVulnerability}
              />
            </div>
          </div>
        )}
      </main>

      {/* Global Vulnerability Modal Dialog */}
      <CreateVulnerabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddVulnerability}
      />
    </div>
  );
}
