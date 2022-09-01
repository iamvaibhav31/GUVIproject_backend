function errorHandler(error, req, res, next) {
     if (typeof error === 'string') {
          return res.status(400).json({ message: error });
     }

     if (typeof error === 'ValidationError') {
          return res.status(400).json({ message: error.message });
     }

     if (typeof error === 'ValidationError') {
          return res.status(400).json({ message: error.message });
     }
}