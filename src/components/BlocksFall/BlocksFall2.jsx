import { useEffect, useRef } from "react";
import Matter, { Bodies } from "matter-js";

import block1 from "../../assets/blocks/1.png"
import block2 from "../../assets/blocks/2.png"
import block3 from "../../assets/blocks/3.png"
import block4 from "../../assets/blocks/4.png"
import block5 from "../../assets/blocks/5.png"
import block6 from "../../assets/blocks/6.png"
import block7 from "../../assets/blocks/7.png"
import block8 from "../../assets/blocks/8.png"
import block9 from "../../assets/blocks/9.png"
import block10 from "../../assets/blocks/10.png"
import block11 from "../../assets/blocks/11.png"
import c from "../../assets/blocks/c.svg"
import h from "../../assets/blocks/h.svg"
import i from "../../assets/blocks/i.svg"
import n from "../../assets/blocks/n.svg"
import a from "../../assets/blocks/a.svg"
import f from "../../assets/blocks/f.svg"
import y from "../../assets/blocks/y.svg"

const dataChinafy = [
  {
    imgLink: c,
    xSize: 276,
  },
  {
    imgLink: h,
    xSize: 184,
  },
  {
    imgLink: i,
    xSize: 52,
  },
  {
    imgLink: n,
    xSize: 184,
  },
  {
    imgLink: a,
    xSize: 177,
  },
  {
    imgLink: f,
    xSize: 118,
  },
  {
    imgLink: y,
    xSize: 200,
  },

]

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

const ChinafySpawn = (link, xSize, i, screenWidth, x, y) => {
  const sizeScale =
    screenWidth >= 1440
      ? 0.7
      : screenWidth >= 769
      ? (screenWidth * 0.7) / 1440
      : screenWidth >= 450
      ? (screenWidth * 1) / 650
      : screenWidth >= 320
      ? (screenWidth * 0.6) / 550
      : 1;

  return Bodies.rectangle(
    x,
    y,
    xSize * sizeScale,
    80 * sizeScale,
    {
      // restitution: 0.7,
      // chamfer: { radius: 40 * sizeScale },
      render: {
        sprite: {
          texture: link,
          xScale: 1 * sizeScale,
          yScale: 1 * sizeScale,
        },
      },
    }
  );
}

const BlocksFall2 = ({ active, anim }) => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const BlockSpawn = (link, xSize, i, screenWidth, x, y) => {
    const sizeScale =
      screenWidth >= 1440
        ? 0.7
        : screenWidth >= 769
        ? (screenWidth * 0.7) / 1440
        : screenWidth >= 450
        ? (screenWidth * 1) / 650
        : screenWidth >= 320
        ? (screenWidth * 0.6) / 550
        : 1;

    return Bodies.rectangle(
      x,
      y,
      xSize * sizeScale,
      80 * sizeScale,
      {
        restitution: 0.7,
        chamfer: { radius: 40 * sizeScale },
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

    let acc = 0;
    const wordChinafy = dataChinafy.map((e, i) => {
      const totalWidth = dataChinafy.reduce((total, current) => total + current.xSize, 0);
      const startX = (screenWidth - totalWidth) / 2;

      const block = ChinafySpawn(e.imgLink, e.xSize, i, screenWidth, startX + acc, screenHeight - 100);
      acc += e.xSize;

      return block;
    });

    const engine = Matter.Engine.create({});
    engine.gravity.y = 0.7;

    const render = Matter.Render.create({
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
      screenWidth / 2,
      screenHeight + 50,
      screenWidth,
      100,
      {
        isStatic: true,
        render: {
          fillStyle: "none",
        },
      }
    );

    const blocks = dataBlocks.map((e, i) => {
      return BlockSpawn(e.imgLink, e.xSize, i, screenWidth, Math.random() * screenWidth, -Math.random() * 500);
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: { visible: false },
      },
    });
    Matter.Render.mouse = mouse;

    Matter.World.add(engine.world, [mouseConstraint, floor, ...wordChinafy, ...blocks]);

    Matter.Engine.run(engine);
    Matter.Render.run(render);
  };

  useEffect(() => {
    active && anim && RenderScene();
  }, [active, anim]);

  return (
    <div className="w-full h-full pointer-events-none" ref={boxRef}>
      <canvas className="w-full h-full pointer-events-none" ref={canvasRef} />
    </div>
  );
};

export { BlocksFall2 };
