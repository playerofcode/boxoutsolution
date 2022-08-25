import SolutionItem from './SolutionItem'; 
const Solution = () => {
 
  return (
    <>
    <div className='container'>
      <div className='row py-4 text-center'>
        <div className='col-12 col-lg-12'>
          <h1>Our Solution</h1>
          <h3>All the products mention below have pocket friendly price website, mobile Application, admin portal</h3>
        </div>
        <div className='row'>
        
          <SolutionItem/>
        </div>
        
       
      </div>
    </div>
    </>
  )
}

export default Solution