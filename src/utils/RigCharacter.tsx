/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
// import { LoopOnce } from 'three'

type ActionName = "rigAction.001";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.SkinnedMesh;
    Cube001_1: THREE.SkinnedMesh;
    Cube001_2: THREE.SkinnedMesh;
    Cube001_3: THREE.SkinnedMesh;
    Cube001_4: THREE.SkinnedMesh;
    Cube001_5: THREE.SkinnedMesh;
    pants: THREE.SkinnedMesh;
    shirt: THREE.SkinnedMesh;
    root: THREE.Bone;
    ["MCH-upper_arm_ik_targetparentL"]: THREE.Bone;
    ["MCH-upper_arm_ik_targetparentR"]: THREE.Bone;
    ["MCH-torsoparent"]: THREE.Bone;
    ["MCH-hand_ikparentL"]: THREE.Bone;
    ["MCH-hand_ikparentR"]: THREE.Bone;
  };
  materials: {
    skin: THREE.MeshStandardMaterial;
    eyes: THREE.MeshStandardMaterial;
    teeth: THREE.MeshStandardMaterial;
    tongue: THREE.MeshStandardMaterial;
    hair: THREE.MeshStandardMaterial;
    hat: THREE.MeshStandardMaterial;
    pants: THREE.MeshStandardMaterial;
    shirt: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type RigType = JSX.IntrinsicElements["group"];

interface RigCharacterProps extends RigType {
  // group: JSX.IntrinsicElements['group'],
  action: boolean;
}

export default function RigCharacter(props: RigCharacterProps): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/ME.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  console.log(actions["rigAction.001"]?.paused);
  useEffect(() => {
    const wave = actions["rigAction.001"];
    if (!wave) return;
    if (props.action) {
      wave.paused = false;
      wave.play();
    } else {
      wave.paused = true;
    }
    // if we have a rig action, then look into prop.action
    // otherwise pass
    // TO-DO: playback speed (with slider), angle, scroll-based animation.
  }, [props.action, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="rig">
        <primitive object={nodes.root} />
        <primitive object={nodes["MCH-upper_arm_ik_targetparentL"]} />
        <primitive object={nodes["MCH-upper_arm_ik_targetparentR"]} />
        <primitive object={nodes["MCH-torsoparent"]} />
        <primitive object={nodes["MCH-hand_ikparentL"]} />
        <primitive object={nodes["MCH-hand_ikparentR"]} />
        <skinnedMesh
          geometry={nodes.Cube001.geometry}
          material={materials.skin}
          skeleton={nodes.Cube001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.eyes}
          skeleton={nodes.Cube001_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.teeth}
          skeleton={nodes.Cube001_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube001_3.geometry}
          material={materials.tongue}
          skeleton={nodes.Cube001_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube001_4.geometry}
          material={materials.hair}
          skeleton={nodes.Cube001_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube001_5.geometry}
          material={materials.hat}
          skeleton={nodes.Cube001_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.pants.geometry}
          material={materials.pants}
          skeleton={nodes.pants.skeleton}
        />
        <skinnedMesh
          geometry={nodes.shirt.geometry}
          material={materials.shirt}
          skeleton={nodes.shirt.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ME.glb");
