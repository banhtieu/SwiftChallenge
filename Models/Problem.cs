namespace SwiftChallenge.Models
{
    

    /// the model of a code - problem
    public class Problem {

        // if of the problem
        public int Id { get; set; }

        //  
        public string Name { get; set; }

        // start 
        public string StartCode { get; set; }

        // code to verify 
        public string VerifyCode { get; set; }

    }

}