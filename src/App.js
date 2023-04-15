import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de nosotros.</h1>
        <Testimonio 
        nombre ="Hernán Cardoso"
        pais= "México"
        imagen="1"
        cargo="Ingeniero"
        empresa="Yosivoy.org"
        testimonio="Como desarrollador de software, he tenido la oportunidad de trabajar con yosivoy.org y su plataforma de invitaciones digitales, ¡y estoy impresionado! La calidad del software y la interfaz de usuario son excepcionales. He tenido una experiencia fluida y sin complicaciones al crear y personalizar invitaciones digitales para eventos. La flexibilidad de la plataforma me permite adaptar las invitaciones a las necesidades de mis clientes y agregar funcionalidades personalizadas. Además, el equipo de soporte técnico de yosivoy.org ha sido extremadamente receptivo y colaborativo, brindándome asistencia rápida y profesional en todo momento."
        />
        <Testimonio 
        nombre ="Sebastian Cardoso"
        pais= "Uruguay"
        imagen="2"
        cargo="Ingeniero"
        empresa="Redy app"
        testimonio="Como desarrollador de software, he tenido la oportunidad de trabajar con yosivoy.org y su plataforma de invitaciones digitales, ¡y estoy impresionado! La calidad del software y la interfaz de usuario son excepcionales. He tenido una experiencia fluida y sin complicaciones al crear y personalizar invitaciones digitales para eventos. La flexibilidad de la plataforma me permite adaptar las invitaciones a las necesidades de mis clientes y agregar funcionalidades personalizadas. Además, el equipo de soporte técnico de yosivoy.org ha sido extremadamente receptivo y colaborativo, brindándome asistencia rápida y profesional en todo momento."
        />
        <Testimonio 
        nombre ="Tito Cardoso"
        pais= "Francia"
        imagen="3"
        cargo="Ingeniero"
        empresa="Visible.com"
        testimonio="Como desarrollador de software, he tenido la oportunidad de trabajar con yosivoy.org y su plataforma de invitaciones digitales, ¡y estoy impresionado! La calidad del software y la interfaz de usuario son excepcionales. He tenido una experiencia fluida y sin complicaciones al crear y personalizar invitaciones digitales para eventos. La flexibilidad de la plataforma me permite adaptar las invitaciones a las necesidades de mis clientes y agregar funcionalidades personalizadas. Además, el equipo de soporte técnico de yosivoy.org ha sido extremadamente receptivo y colaborativo, brindándome asistencia rápida y profesional en todo momento."
        />
      </div>
    </div>
  );
}

export default App;
