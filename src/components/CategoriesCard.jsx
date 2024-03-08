function CategoriesCard({clothType, color}) {
  return (
    <div className={`w-[650px] h-[250px] rounded-2xl shadow-black shadow-3xl flex items-center justify-center ${color}`}>
        <h2 className="text-white text-6xl font-bold">{clothType}</h2>
    </div>
  )
}

export default CategoriesCard