import TeamModel from "./team.model.js";


const createTeam = async (req, res) => {
    try {



        console.log("req.body", req.body)

           const teamData = new TeamModel(req.body);

        const result = await teamData.save();
        console.log(result)
    res.status(200).json({
    data:result
})

} catch (error) {
    console.log(error)
}

}

const getTeam = async (req, res) => {
    try {
        const data = await TeamModel.find();
        res.status(200).json({
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch Teams",
            error: error.message
        });
    }
};
const getSingleTeam = async (req, res) => {

    try {
        const id = req.params.id
        const data = await TeamModel.findById(id)
        res.status(200).json({data:data})

    } catch (error) {
        console.log(error)

}

}

const update = async (req, res) => {
    try {

        const id = req.params.id
        console.log(req.body)


    //        name: {
    //     type:String
    // },
    // Team: {
    //     type:String
    // },
    // TeamType: {
    //    type:String
    // },
    // des: {
    //      type:String
    // }
 const updatedData = await TeamModel.findByIdAndUpdate(
    id,
     {
         name: req.body.name,

 position:req.body.position,
imgLink:req.body.imgLink
    },
    { new: true, runValidators: true }
);
        res.send(updatedData)
 } catch (error) {
console.log(error)
 }

}


const remove = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await TeamModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Not Found' });
    }

    res.status(200).json({
      message: 'Team deleted successfully',
      deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const TeamController = {remove,createTeam,getSingleTeam,getTeam,update,remove}