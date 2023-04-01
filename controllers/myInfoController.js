

const updateMyInfo = async (req, res, next) => {
    try {
        const info = {};
        info.personal = {
            email: req.body.email,
            gender: req.body.gender,
            dob: req.body.dob,
            mobile: req.body.mobile,
            rollNumber: req.body.rollNumber,
            state: req.body.state,
            fathersName: req.body.fathersName,
            mothersName: req.body.mothersName,
            guardianPhone: req.body.guardianPhone,
            debarred: req.body.debarred,
            address: req.body.address,
            languages: req.body.languages
        };
        info.academic = {
            collegeName: req.body.collegeName,
            cgpa: req.body.cgpa,
            activeBacks: req.body.activeBacks,
            deadBacks: req.body.deadBacks
        };
        info.others = {
            skills: req.body.skills,
            majorProjectLink: req.body.majorProjectLink,
            positionOfResponsibility: req.body.positionOfResponsibility,
            resumeLink: req.body.resumeLink
        }
        //save OR updatein mongo
        
        res.status(201).send({ message: 'User information updated successfully' });
    } catch {
        res.status(500).send();
    }
}

module.exports={
    updateMyInfo
}



