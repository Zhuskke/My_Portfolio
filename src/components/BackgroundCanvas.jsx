import { useEffect, useRef } from "react";
import * as THREE from "three";

const BackgroundCanvas = () => {
  const containerRef = useRef();

  useEffect(() => {
    let renderer, camera, scene, particles, mouse;
    const isMobile = window.innerWidth < 768;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = isMobile ? 5 : 2;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      mouse = new THREE.Vector2(0, 0);

      const particleCount = isMobile ? 500 : 2000;
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const color1 = new THREE.Color(0x38bdf8);
      const color2 = new THREE.Color(0x60a5fa);

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        positions.push(x, y, z);

        const color = color1.clone().lerp(color2, Math.random());
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      window.addEventListener("resize", onWindowResize);
      window.addEventListener("mousemove", onMouseMove);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0008;
      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    if (containerRef.current) {
      init();
      animate();
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 opacity-80" />;
};

export default BackgroundCanvas;
