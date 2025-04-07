export default function Report() {
  return (
    <main>
      <h2>Reporte de fallas</h2>
      <p>Si tienes algún problema con el servicio, repórtalo aquí.</p>
      <form>
        <label>Describe el problema:</label>
        <textarea placeholder="Ejemplo: No hay agua en mi colonia..."></textarea>
        <label>Ubicación:</label>
        <input type="text" placeholder="Ejemplo: Colonia Centro, Calle Hidalgo #45" />
        <button type="submit">Enviar Reporte</button>
      </form>
      <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
        <p>[Imagen de reporte de fallas]</p>
      </div>
    </main>
  );
}