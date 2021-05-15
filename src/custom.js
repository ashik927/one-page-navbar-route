import Header from './components/Header';

const customHandle =(menu)=>{
       
    const menuCollapse={
        display:'none',
    }
   return <Header menuCollapse = {menuCollapse} />;
}


export default customHandle;