
export const TiposBasicos = () => {

  const nombre: string | number | boolean = 'Ramon';
  const edad: number = 21;
  const estaActivo: boolean = true;


  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  )
}
