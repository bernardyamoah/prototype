import { motion } from 'motion/react'
const InvestmentCard = ({ item, index }: { item: any; index: number }) => {
  const bgColors = ['bg-gray-200', 'bg-[#2356a3]']
  const textColors = ['text-gray-800', 'text-white']

  return (
    <motion.div
      className={`${bgColors[index % 2]} ${textColors[index % 2]} rounded-2xl p-8 h-full flex flex-col justify-between`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl mb-4">{item.icon}</div>
      <div>
        <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
        <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default InvestmentCard
