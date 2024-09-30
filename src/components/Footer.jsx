const Footer = () => {
    return (
       <footer style={styles.footer}>
          <p>&copy; 2024 Pizzería Mamma Mía. Todos los derechos reservados.</p>
       </footer>
    );
 };
 
 const styles = {
    footer: {
       backgroundColor: '#333',
       color: 'white',
       textAlign: 'center',
       padding: '10px 0',
       position: 'fixed',
       bottom: '0',
       width: '100%'
    }
 };
 
 export default Footer;
 