import Price from "./price.model.js";

const createPrice = async (req, res) => {
    try {



        console.log("req.body", req.body)

           const priceData = new Price(req.body);

    const result = await priceData.save();
    res.status(200).json({
    data:result
})

} catch (error) {
    console.log(error)
}

}

const getPrice = async (req, res) => {
    try {
        const data = await Price.find();
        res.status(200).json({
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch Prices",
            error: error.message
        });
    }
};
const getSinglePrice = async (req, res) => {

    try {
        const id = req.params.id
        const data = await Price.findById(id)
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
    // price: {
    //     type:String
    // },
    // priceType: {
    //    type:String
    // },
    // des: {
    //      type:String
    // }
 const updatedData = await Price.findByIdAndUpdate(
    id,
     {
         name: req.body.name,
         price: req.body.price,
priceType:req.body.priceType,
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

    const deletedUser = await Price.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Not Found' });
    }

    res.status(200).json({
      message: 'Price deleted successfully',
      deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const priceController = {createPrice,getSinglePrice,getPrice,update,remove}