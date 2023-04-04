
import Biography from "../components/Details/Biography";
import Education from "../components/Details/Education";
import Skills from "../components/Details/Skills";
import { ButtonType2 } from "../others/ButtonType2";


export const Variability=[
    {
        slug:"bio",
        title:<Biography/>,
        butt:<ButtonType2 text={"Biography"}/>

    },
    {
        slug:"skl",
        title:<Skills/>,
        butt:<ButtonType2 text={"Skills"}/>

    },
    {
        slug:"edu",
        title:<Education/>,
        butt:<ButtonType2 text={"Education"}/>

    }
]