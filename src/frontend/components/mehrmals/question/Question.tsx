

import img from '../../../resources/question/image.png';
import './question.scss';

const Question: React.FC = () => {


    return (
        <div className="question">
            <div className="question_title">Any questions?</div>
            <div className="question_box">
                <div className="question_box_form">
                    <form action="POST">
                        <input required className="question_box_form_one" placeholder="Your name" name="name" type="text" />
                        <input required className="question_box_form_two" placeholder="Your telephone number" name="tel" type="tel" />
                        <textarea required className="question_box_form_three" placeholder="Your question" name="text" id="" ></textarea>
                        <button className="question_box_form_four" type="submit">Send</button>
                    </form>
                </div>
                <div className="question_box_text">Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</div>
            </div>
            <div className="question_img">
                <img src={img} alt="image" />
            </div>
        </div>
    )
}


export default Question;