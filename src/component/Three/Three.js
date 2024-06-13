import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJS = () => {
    const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current ,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(150,0.5);
      camera.position.set(29, 14, 12);
      const loader = new GLTFLoader();
      scene.background = new THREE.Color("green");
    //   const light = new THREE.DirectionalLight(0xffff00, 10);
    //   scene.add(light);

      loader.load("/scene.gltf", (object) => {
        scene.add(object.scene);
        renderer.render(scene, camera);
        // function animate(){
        //     requestAnimationFrame(animate)
        //     object.scene.rotation.y += 0.002;
            
        // }
        
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas" width="300" height="300" style= {{flex:1, zIndex:100}}></canvas>;
};

export default ThreeJS;