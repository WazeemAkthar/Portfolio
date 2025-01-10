'use client';
import { motion } from 'framer-motion';

const RadarChart = ({ skills }) => {
  const size = 300;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;

  const getPoint = (index, total, value) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle)
    };
  };

  const points = skills.map((_, i) => getPoint(i, skills.length, skills[i].level));
  const pathData = points.map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`)).join(' ') + ' Z';

  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  return (
    <svg width={size} height={size} className="mx-auto">
      {/* Background grid */}
      {gridLevels.map((level) => (
        <motion.polygon
          key={level}
          points={skills.map((_, i) => {
            const point = getPoint(i, skills.length, level * 100);
            return `${point.x},${point.y}`;
          }).join(' ')}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: level * 0.1 }}
        />
      ))}

      {/* Skill lines */}
      {skills.map((skill, i) => (
        <motion.line
          key={i}
          x1={centerX}
          y1={centerY}
          x2={getPoint(i, skills.length, 100).x}
          y2={getPoint(i, skills.length, 100).y}
          stroke="currentColor"
          strokeOpacity={0.2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}

      {/* Skill labels */}
      {skills.map((skill, i) => {
        const point = getPoint(i, skills.length, 120);
        return (
          <motion.text
            key={i}
            x={point.x}
            y={point.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {skill.name}
          </motion.text>
        );
      })}

      {/* Skill data */}
      <motion.path
        d={pathData}
        fill="currentColor"
        fillOpacity={0.2}
        stroke="currentColor"
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
};
