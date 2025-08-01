import  * as THREE from 'three';


function App() {

// let v= console.log(THREE);
// intiallizng SCENE
 const SCENE =new THREE.Scene();
 //adding object to scene
 const CubeGeometry=new THREE.BoxGeometry(1,1,1);
 const CubeMaterial=new THREE.MeshBasicMaterial({Color:0xf000})
 const CubeMesh=new THREE.Mesh(
  CubeGeometry,CubeMaterial,
 );
 SCENE.add(CubeMesh)

 //inttiallize the camera

 const camera= new THREE.PerspectiveCamera(75,window.innerHeight/window.innerWidth,0.1,100)


  return (
    <>
    
    </>
  )
}

export default App
