import './index';
import { useRef, useState } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.setStripes}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.soul}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}material-color={props.customColors.soul} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.soul}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.soul}/>
    </group>
  )
}

function App() {
  return (
    <div className="App">
     <div class="wrapper">
        <div className="card">
            <div class="product-canvas">
              <Canvas>


              </Canvas>
            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div>
                    <input type="color" id="head" name="head"
                           value="#e66465" />
                    <label for="head">Main</label>
                  </div>

                <div>
                    <input type="color" id="body" name="body"
                            value="#f6b73c" />
                    <label for="body">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="body" name="body"
                            value="#f6b73c" />
                    <label for="body">Soul</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
