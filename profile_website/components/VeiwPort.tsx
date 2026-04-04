'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';


export default function VeiwPort() {
    const mountRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({x: 0, y:0});
    const smoothMouse = useRef({x: 0, y:0});

    useEffect(() => {
        const mount = mountRef.current!;
        const renderer = new THREE.WebGLRenderer({antialias: true});
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        renderer.setSize(w, h);
        mount.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 10);
        camera.position.z = 10;

        const scene = new THREE.Scene();
        renderer.render(scene, camera);
        const geo = new THREE.IcosahedronGeometry(1.0, 2);
        const geo2 = new THREE.IcosahedronGeometry(0.5, 2);

        const mat = new THREE.MeshStandardMaterial({
            color: 0xffff,
            flatShading: true
        });

        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);

        const ambientLight = new THREE.HemisphereLight(0xffffff, 0x000000);
        scene.add(ambientLight);

        const secondMesh = new THREE.Mesh(geo2, mat);
        secondMesh.position.add( new THREE.Vector3(25, 25, 25));
        scene.add(secondMesh);

        window.onresize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };


        window.onmousemove = (ev) => {
            mouse.current.x = (ev.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = (ev.clientY / window.innerHeight) * 2 - 1;
        };

        const loader = new THREE.TextureLoader();
        const texture = loader.load(
            'tears_of_steel_bridge.jpg',
            () => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.colorSpace = THREE.SRGBColorSpace;
            scene.background = texture;
            });

        let animId: number;
        const animate = () => {
            animId = requestAnimationFrame(animate);

            smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.03;
            smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.03;
            camera.position.x = -Math.sin(smoothMouse.current.x * 0.5) * 2;
            camera.position.y = -smoothMouse.current.y * 0.5;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
            window.onmousemove = null;
            window.onresize = null;
        };

    }, []);

    return <div ref={mountRef} className="w-full h-full"></div>


}