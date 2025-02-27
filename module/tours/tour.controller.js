import Tour from "./tour.model.js";
export const createTour=async(req,res) => {
    try {
         const { title, description, location, country, city, price,averageRating, image, createdBy,} =
    req.body;
    const tour =new Tour({
        title:title,
        description,
        location,
        country,
        city,
        price,
        averageRating,
        image,
        createdBy,
    });
    await tour.save();
    res.status(201).json({message:"Tour created", tour});
    } catch (error) {
        res.status(400).json({message:"Error creating Tour",error});
    }
   };


  export const getTours = async (req, res) => {
    try {
      const tour = await Tour.find().populate("createdBy","firstName lastName")
       res.status(200).json(tour);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error", error});
    }
  };

  
  // export const getTourById = async (req, res) => {
  //   try {
  //     const tourId=req.params.tourId;
  //     const tour = await Tour.findById(tourId).populate{
  //       "createdBy"
  //     "firstName lastName"
  //     }
  //     res.status(200).json(tour);
  //   } catch (error) {
  //     res.status(500).json({message:"server error",error});
  //   }
  // };
  export const deleteTour = async (req,res) => {
    try {
      const tourId=req.params.tourId;
      const tour=await Tour.findByIdAndDelete(tourId);
    } catch (error) {
      
    }
  }