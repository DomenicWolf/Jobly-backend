

const uri = () => {
    const  PASSWORD = process.env['PASSWORD']
    return (process.env.NODE_ENV === "test")
    ? `postgresql://dom:${PASSWORD}@127.0.0.1:5432/jobly_test`
    : process.env.DATABASE_URL || `postgresql://dom:${PASSWORD}@127.0.0.1:5432/jobly`;
}


module.exports = uri