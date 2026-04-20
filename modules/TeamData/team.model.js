import mongoose from "mongoose";


const teamSchema = mongoose.Schema({

    name: {
        type:String
    },
    position: {
        type:String
    },
    imgLink: {
        type:String
    }
})
const TeamModel = mongoose.model("TeamModel", teamSchema


)
export default TeamModel


// {
//     "id": 1,
//     "name": "Ronaldo",
//     "position": "footballer",
//     "imgLink": "/images/tMemberImg/team1.jpg"
// }