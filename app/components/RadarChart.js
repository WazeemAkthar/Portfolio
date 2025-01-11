import React from 'react';
import { motion } from 'framer-motion';

const RadarChart = ({ skills = [], className = "", theme = "dark" }) => {
  // Return early if no skills are provided
  if (!skills || skills.length === 0) {
    return (
      <div className={`w-full max-w-2xl mx-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'} rounded-lg shadow-lg ${className}`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Skills Overview</h2>
          <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} py-8`}>
            No skills data available
          </p>
        </div>
      </div>
    );
  }

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

  const points = skills.map((skill, i) => getPoint(i, skills.length, skill.level));
  const pathData = points.map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`)).join(' ') + ' Z';
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  const totalSkillLevel = skills.reduce((acc, skill) => acc + skill.level, 0);
  const averageSkillLevel = (totalSkillLevel / skills.length).toFixed(1);

  return (
    <div className={`w-full max-w-2xl mx-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'} rounded-lg shadow-lg ${className}`}>
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Skills Overview</h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
            Average Proficiency: {averageSkillLevel}%
          </p>
        </div>
        <div className="relative">
          <svg width={size} height={size} className="mx-auto overflow-visible">
            {/* Background grid */}
            {gridLevels.map((level) => (
              <motion.polygon
                key={level}
                points={skills.map((_, i) => {
                  const point = getPoint(i, skills.length, level * 100);
                  return `${point.x},${point.y}`;
                }).join(' ')}
                fill="none"
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity={0.1}
                strokeWidth={1}
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
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity={0.2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            ))}

            {/* Percentage labels */}
            {gridLevels.map((level) => (
              <motion.text
                key={level}
                x={centerX + 10}
                y={centerY - (radius * level)}
                fill={theme === 'dark' ? 'white' : 'black'}
                className="text-xs opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: level * 0.1 }}
              >
                {level * 100}%
              </motion.text>
            ))}

            {/* Skill labels */}
            {skills.map((skill, i) => {
              const point = getPoint(i, skills.length, 120);
              return (
                <motion.g key={i}>
                  <motion.text
                    x={point.x}
                    y={point.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={theme === 'dark' ? 'white' : 'black'}
                    className="text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {skill.name}
                  </motion.text>
                  <motion.text
                    x={point.x}
                    y={point.y + 20}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={theme === 'dark' ? 'white' : 'black'}
                    className="text-xs opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {skill.level}%
                  </motion.text>
                </motion.g>
              );
            })}

            {/* Skill data */}
            <motion.path
              d={pathData}
              className="stroke-blue-500"
              fill={theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)'}
              strokeWidth={2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RadarChart;