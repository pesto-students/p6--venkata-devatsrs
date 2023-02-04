const yup = require('yup');
const Financial = require('../db/models/Financial');

//all financials
const getAll = async (req, res) => {
    try {
        const financialYear = new Date().getFullYear();
        const financials = await Financial.find({ user: req.user._id, financialYear });
        res.json(financials);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// filter by 
const getByFilter = async (req, res) => {
 
    const financialsSchema = yup.object().shape({
        income: yup.number().required().min(1),
        expenses: yup.number().required().min(1),
        savings: yup.number().required().min(1),
        year: yup.number().required().min(2000).max(2023),
      });
          
 
      await financialsSchema.validate(req.body);
 
    try {
        const financial = new Financial({
            income: req.body.income,
            expenses: req.body.expenses,
            savings: req.body.savings,
            user: req.user._id,
            financialYear: req.body.year
        });
        await financial.save();
        res.send(financial);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// by year 
const getByYear =   (req, res) => {

    const year = req.params.year;

    console.log(" _id " ,req.user._id);

    console.log("getByYear - ", year);

    Financial.find({ user: req.user._id, financialYear: year}, (error, data) => {

         console.log("data", data);
         console.log("error", error);

        if(error) {
            res.status(500).json({error: error});
        } else {
            res.status(200).json({data: data});
        }
    });
};

// delete by id
const deleteById =  (req, res) => {

    const id = req.params.id;

    console.log(id);
    Financial.findByIdAndRemove(id, (error, data) => {
        if(error) {
            res.status(500).json({error: error});
        } else {
            res.status(200).json({message: "Financial data deleted successfully"});
        }
    });
};

module.exports = {
    getAll,
    getByFilter,
    getByYear,
    deleteById
};