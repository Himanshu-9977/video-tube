export const asyncHandler = (fn) => {
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
        .catch((err) => next(err));
    }
}


// export const asyncHandler = () => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({ message: error.message })
//     }
// }