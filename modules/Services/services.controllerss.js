import Services from "./services.model.js";

const createServices = async (req, res) => {
    try {



        console.log("req.body", req.body)

           const servicesData = new Services(req.body);

    const result = await servicesData.save();
    res.status(200).json({
    data:result
})

} catch (error) {
    console.log(error)
}

}
const getServices = async (req, res) => {
    try {
        const data = await Services.find();
        res.status(200).json({
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch services",
            error: error.message
        });
    }
};
const getSingleService = async (req, res) => {

    try {
        const id = req.params.id
        const data = await Services.findById(id)
        res.status(200).json({data:data})

    } catch (error) {
        console.log(error)

}

}

const update = async (req, res) => {
    try {

        const id = req.params.id
        console.log(req.body)
 const updatedData = await Services.findByIdAndUpdate(
    id,
     {
         title: req.body.title,
imgLink:req.body.imgLink,
des:req.body.des
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

    const deletedUser = await Services.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Not Found' });
    }

    res.status(200).json({
      message: 'Capabilities deleted successfully',
      deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const serviceController = { remove,update, createServices, getServices,getSingleService }