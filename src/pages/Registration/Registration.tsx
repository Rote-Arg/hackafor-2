import { Footer, Nav } from '@components';

export const Registration = () => {
  return (
    <>
      <Nav />
      <main className="w-full max-w-7xl mx-auto font-dmsans text-white px-5 ">
        <article id="registration">
          <p>
            Aunque te hayas prescrito, debes registrarte con todos los datos que se solicitan en el formulario. Si quieres ver el resto de
            detalles revisa <a href="">el reglamento</a> antes de enviar tu participación
          </p>
          <form action="post">
            <label htmlFor="NombreDelAdministrado">Nombre del administrador*</label>
            <input type="text" placeholder="Introduce el nombre del administrador" />
            <label htmlFor="NombreDelProyecto">Nombre del proyecto*</label>
            <input type="text" placeholder="Introduce el nombre del administrador" />
            <label htmlFor="descripcion">Descripcion*</label>
            <textarea name="descripcion" cols={60} rows={5} placeholder="Introduce una brteve descripcion explicativa..." />
            <label htmlFor="agree">
              Al enviar mi particicpacion, confirmo que he leido y acepto los <a href="">terminos y condiciones</a> de privacidad
            </label>
            <input type="checkbox" name="agree" id="agree" />
            <input type="checkbox" name="search" id="search" />
            <label htmlFor="search">Estoy buscando a alguien</label>
            isSearch{}
            <button type="submit">Enviar participación</button>
          </form>
        </article>
      </main>
      <Footer />
    </>
  );
};
