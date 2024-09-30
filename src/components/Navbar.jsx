
const Navbar = () => {
    return (
       <nav style={styles.navbar}>
          <h1 style={styles.title}>Pizzería Mamma Mía</h1>
          <ul style={styles.navItems}>
             <li>Inicio</li>
             <li>Menú</li>
             <li>Contacto</li>
          </ul>
       </nav>
    );
 };
 
 const styles = {
    navbar: {
       backgroundColor: '#ff6347',
       padding: '10px',
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    title: {
       color: 'white',
       fontSize: '24px'
    },
    navItems: {
       listStyleType: 'none',
       display: 'flex',
       gap: '20px',
       color: 'white',
       fontSize: '18px'
    }
 };

 // Si, lo se no se haca por aca el ccs no entiendo porque si lo hago por separado me sale no-undef pero bueno lo soluciono colocandolo aca <:
 
 export default Navbar;
 