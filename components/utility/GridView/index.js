const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const GridView = () => (
  <div className='grid-container'>
    {lines.map((line, i) => <div key={i.toString()} className='grid-col' />)}
  </div>
)

export default GridView
