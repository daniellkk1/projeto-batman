import { Photografys } from "../../utils/backcards/array"
import { Card, ContentFull, ContentPho } from "./style"


export const Photos = () => {
    return(
        <ContentFull>
            <ContentPho>
                {Photografys.map((item) => {
                    return(

                        <Card style={{backgroundImage: `url(${item.image})`}}></Card>

                    )
                })}
            </ContentPho>
        </ContentFull>
    )
}