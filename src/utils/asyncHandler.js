

const asyncHandler =(requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    
}
}

export { asyncHandler };

// different method 

// const asynchandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.error(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };