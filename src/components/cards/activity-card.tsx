import { motion } from 'motion/react'
const ActivityCard = ({ item, isActive }: { item: any; isActive: boolean }) => {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden h-72 shadow-lg"
      animate={{
        scale: isActive ? 1.02 : 0.98,
        y: isActive ? -8 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm opacity-90">{item.description}</p>
      </div>
    </motion.div>
  )
}
export default ActivityCard
