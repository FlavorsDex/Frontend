import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/Layout/Container'
// import DripTabButtons from './components/IfoTabButtons'
// import Hero from './components/Hero'
import CurrentDrips from './CurrentIfo'
import PastDrips from './PastDrip'
// import PastDripHero from './components/PastDripsHero'

const Drips = () => {
  const { path } = useRouteMatch()

  return (
    <>
      {/* <Hero /> */}
      <Container>
        <CurrentDrips />
      </Container>
      <Container max-width={"100%"}>
        <PastDrips />
      
      </Container>
    </>
  )
}

export default Drips
