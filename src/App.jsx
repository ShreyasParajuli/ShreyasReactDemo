export function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#333333', borderBottom: '2px solid #cccccc', paddingBottom: '10px' }}>
      
      </h1>
      <p style={{ color: '#666666', fontStyle: 'italic', marginBottom: '30px' }}>
        
      </p>

      {/* Section 1: Create Vulnerability */}
      <div style={{ 
        backgroundColor: '#e6f4ea', 
        border: '2px solid #34a853', 
        padding: '20px', 
        marginBottom: '20px', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ color: '#137333', marginTop: '0px' }}>Create Vulnerability</h2>
        <p style={{ color: '#202124' }}>
         
        </p>
        <button style={{ 
          padding: '10px 15px', 
          backgroundColor: '#34a853', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          fontWeight: 'bold' 
        }}>
          Create Button
        </button>
      </div>

      
      <div style={{ 
        backgroundColor: '#e8f0fe', 
        border: '2px solid #1a73e8', 
        padding: '20px', 
        marginBottom: '20px', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ color: '#174ea6', marginTop: '0px' }}>View Vulnerabilities</h2>
        <p style={{ color: '#202124' }}>
         list all current vulnerabilities.
        </p>
        <button style={{ 
          padding: '10px 15px', 
          backgroundColor: '#1a73e8', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          fontWeight: 'bold' 
        }}>
          View Button
        </button>
      </div>

      
      <div style={{ 
        backgroundColor: '#fef7e0', 
        border: '2px solid #f9ab00', 
        padding: '20px', 
        marginBottom: '20px', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ color: '#b06000', marginTop: '0px' }}>Update Vulnerability</h2>
        <p style={{ color: '#202124' }}>
         modify details of an existing vulnerability.
        </p>
        <button style={{ 
          padding: '10px 15px', 
          backgroundColor: '#f9ab00', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          fontWeight: 'bold' 
        }}>
          Update Button
        </button>
      </div>
    </div>
  );
}
