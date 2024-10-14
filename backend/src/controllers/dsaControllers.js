import { Dsa } from "../models/dsamodel.js";
import { SolvedQuestions } from "../models/solvedquestionsModal.js";

// Adding a DSA problem
const addDsaProblem = async (req, res) => {
  console.log(req.body);
  const {
    questionName,
    link,
    solutionVideoLink,
    solutionArticleLink,
    difficultyTags,
    companyTags,
    dataStructureTags,
    lists, 
    description,
    platformTags
  } = req.body;

  try {
    // Check if the question already exists
    let dsaProblem = await Dsa.findOne({ questionName });
    if (dsaProblem) {
      return res
        .status(400)
        .json({ msg: `Question "${questionName}" already exists.` });
    }

    // Create a new DSA problem instance
    dsaProblem = new Dsa({
      questionName,
      platformTags,
      link,
      solutionVideoLink,
      solutionArticleLink,
      difficultyTags,
      companyTags,
      dataStructureTags,
      lists, // Added lists
      description, // Added description
    });

    // Save the new DSA problem to the database
    await dsaProblem.save();
    console.log(dsaProblem);
    return res.status(201).json({msg:"submitted successfully"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

// Get all DSA problems
const getAllProblems = async (req, res) => {
  const { page = 1, limit = 10, filter = {}, search = "" } = req.query;
  if (filter == "") {
    filter = {};
  }
  const filterObj = JSON.parse(filter);
  let listquery = {};
  let dsquery = {};
  let compquery = {};
  let diffquery = {};
  let pltquery = {};

  if (filterObj.Platform != "") {
    pltquery = { platformTags: { $in: filterObj.Platform } };
  }
  if (filterObj.Difficulty != "") {
    diffquery = {  difficultyTags: { $in: filterObj.Difficulty } };
  }
  if (filterObj.Company != "") {
    compquery = { companyTags: { $in: filterObj.Company } };
  }
  if (filterObj.datastructure != "") {
    dsquery = { dataStructureTags: { $in: filterObj.datastructure } };
  }
  if (filterObj.list != "") {
    listquery = { lists: { $in: `${filterObj.list}` } };
  }
  const query = {
    ...compquery,
    ...listquery,
    ...dsquery,
    ...diffquery,
    ...pltquery,
    questionName: { $regex: search, $options: "i" },
  };

  console.log("queryyy", query);
  // Calculate pagination parameters
  const skip = (page - 1) * limit;

  try {
    console.log(req.query);
    const total = await Dsa.countDocuments(query); // Get total documents for pagination
    const problems = await Dsa.find(query)
      .populate("dataStructureTags")
      .populate("companyTags")
      .populate("platformTags")
      .populate("difficultyTags")
      .skip(skip)
      .limit(limit);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({ problems, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

//get solved specific user Problem

const getSolvedProblems=async(req,res)=>{
  const {userId}=req.query;
  console.log(req.query)
  try{
     const questions=await SolvedQuestions.find({userId}).populate('question')
     const questionslist=questions.map((val)=>(val.question))
     console.log(questionslist)
     res.status(200).json(questionslist)
  }catch(error){
    console.log(error)
     res.status(500).json({msg:"internal server error"})
  }
}

export { getAllProblems, addDsaProblem,getSolvedProblems };
