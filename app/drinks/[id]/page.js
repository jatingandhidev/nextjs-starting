import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import Image from 'next/image'

const fetchSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`)
  // throw error
  if (!response.ok) {
    throw new Error(`Failed to fetch drink with id ${id}`)
  }
  const data = await response.json()
  return data
}

const SingleDrink = async ({ params }) => {
  const data = await fetchSingleDrink(params.id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  console.log(data.strDrink)
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <div className="text-4xl mb-8">{title}</div>
    </div>
  )
}
export default SingleDrink
