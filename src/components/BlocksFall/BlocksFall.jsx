import { useEffect, useRef } from "react";
import Matter from "matter-js";

import block1 from "../../assets/blocks/1.png";
import block2 from "../../assets/blocks/2.png";
import block3 from "../../assets/blocks/3.png";
import block4 from "../../assets/blocks/4.png";
import block5 from "../../assets/blocks/5.png";
import block6 from "../../assets/blocks/6.png";
import block7 from "../../assets/blocks/7.png";
import block8 from "../../assets/blocks/8.png";
import block9 from "../../assets/blocks/9.png";
import block10 from "../../assets/blocks/10.png";
import block11 from "../../assets/blocks/11.png";

const dataBlocks = [
  {
    imgLink: block1,
    xSize: 152,
  },
  {
    imgLink: block2,
    xSize: 122,
  },
  {
    imgLink: block3,
    xSize: 140,
  },
  {
    imgLink: block4,
    xSize: 146,
  },
  {
    imgLink: block5,
    xSize: 137,
  },
  {
    imgLink: block6,
    xSize: 123,
  },
  {
    imgLink: block7,
    xSize: 132,
  },
  {
    imgLink: block8,
    xSize: 185,
  },
  {
    imgLink: block9,
    xSize: 178,
  },
  {
    imgLink: block10,
    xSize: 114,
  },
  {
    imgLink: block11,
    xSize: 112,
  },
]

const BlocksFall = ({ active, anim }) => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  //Initialize world
  let Engine = Matter.Engine;
  let Render = Matter.Render;
  let World = Matter.World;
  let Bodies = Matter.Bodies;

  const BlockSpawn = (link, xSize, i, screenWidth) => {
    const sizeScale =
      screenWidth >= 1440
        ? .7 //desktop
        : screenWidth >= 769
          ? (screenWidth * .7) / 1440 //desktop small
          : screenWidth >= 450
            ? (screenWidth * 1) / 650 //tablet
            : screenWidth >= 320
              ? (screenWidth * .6) / 550 //mobile
              : 1;

    return Bodies.rectangle(
      screenWidth <= 768
        ? 30 * sizeScale + 30 * sizeScale * (i + 1)
        : 90 * sizeScale + 140 * sizeScale * (i + 1), // x position
      i % 2
        ? -500 * sizeScale * (1 * (i + 1))
        : -400 * sizeScale * (1 * (i + 1)), // y position
      xSize * sizeScale, // width
      80 * sizeScale, // height
      {
        restitution: 0.7,
        chamfer: { radius: 40 * sizeScale }, // block radius
        render: {
          sprite: {
            texture: link,
            xScale: 1 * sizeScale,
            yScale: 1 * sizeScale,
          },
        },
      }
    );
  };

  const RenderScene = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let engine = Engine.create({});

    engine.gravity.y = 0.7; // set gravity

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: screenWidth,
        height: screenHeight,
        background: "none",
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(
      screenWidth / 2, // scene position x
      screenHeight + 50, // scene position y
      screenWidth, // scene width
      100, // scene height
      {
        isStatic: true,
        render: {
          fillStyle: "none",
        },
      }
    );

    const wallRight = Bodies.rectangle(
      screenWidth, // position x
      screenHeight / 2, // position y
      1, // width
      screenHeight, // height
      {
        isStatic: true,
        render: {
          fillStyle: "none",
        },
      }
    );

    const wallLeft = Bodies.rectangle(0, screenHeight / 2, 1, screenHeight, {
      isStatic: true,
      render: {
        fillStyle: "none",
      },
    });

    const renderBlocks = dataBlocks.map((e, i) => {
      return BlockSpawn(e.imgLink, e.xSize, i, screenWidth);
    });

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse, constraint: {
        render: { visible: false }
      }
    });
    Render.mouse = mouse;

    World.add(engine.world, [mouseConstraint, floor, wallLeft, wallRight, ...renderBlocks]);

    Engine.run(engine);
    Render.run(render);
  };

  useEffect(() => {
    active && anim && RenderScene();
  }, [active])

  return (
    <div className="w-full h-full pointer-events-none" ref={boxRef}>
      <canvas className="w-full h-full pointer-events-none" ref={canvasRef} />
    </div>
  );
}

export { BlocksFall }