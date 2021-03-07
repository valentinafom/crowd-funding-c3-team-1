import { Card } from "../../components/ui/molecules/card"
import { FooterNavigation } from "../../components/ui/molecules/footer-navigation"
import { Person } from "../../components/ui/molecules/person"
import { StyledExploreList } from "../../styles/styled-components"

const dummyData = [
  {
    id: "1",
    img: 'images/inv1.jpg',
    name: "Eva Smith",
    description: "One of the top investors"
  },
  {
    id: "2",
    img: 'images/inv2.jpg',
    name: "John Do",
    description: "One of the top investors"
  },
  {
    id: "3",
    img: 'images/inv3.jpg',
    name: "Molly Ly",
    description: "One of the top investors"
  },
  {
    id: "4",
    img: 'images/inv4.jpg',
    name: "Hanna Montana",
    description: "One of the top investors"
  },
  {
    id: "5",
    img: 'images/inv5.jpg',
    name: "Adam Smith",
    description: "One of the top investors"
  },
  {
    id: "6",
    img: 'images/inv6.jpg',
    name: "Ivan Ivanov",
    description: "One of the top investors"
  },
  {
    id: "7",
    img: 'images/inv7.jpg',
    name: "Mike Reez",
    description: "One of the top investors"
  },
  {
    id: "8",
    img: 'images/inv8.jpg',
    name: "Amy V",
    description: "One of the top investors"
  },
]

const TopInvestors = () => (
  <>
    <StyledExploreList>
      {dummyData.map(({id, name, description, img}) => {
        return <Person imgPath={`/${img}`} name={name} description={description} key={id}/>
      })}
    </StyledExploreList>
    <FooterNavigation />
  </>
)

export default TopInvestors