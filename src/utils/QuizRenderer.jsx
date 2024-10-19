import { useState } from 'react'
import PropTypes from 'prop-types'

const QuizRenderer = ({ quizData }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [results, setResults] = useState(null)

    const handleOptionChange = (questionIndex, option) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: option,
        })
    }

    const handleSubmit = () => {
        let correctCount = 0
        const results = quizData.map((question, index) => {
            const isCorrect = selectedAnswers[index] === question.correctAnswer
            if (isCorrect) correctCount++
            return {
                ...question,
                isCorrect,
            }
        })
        setResults({ results, score: (correctCount / quizData.length) * 5 })
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl text-center font-bold mb-4'>Quiz</h1>
            {quizData.map((question, index) => (
                <>
                    <div key={index} className='mb-4'>
                        <h2 className='text-xl mb-2'>{question.title}</h2>
                        <div className='space-y-2'>
                            {Object.entries(question.options).map(([key, option]) => (
                                <label
                                    key={key}
                                    className={`block p-2 border rounded ${
                                        results
                                            ? results.results[index].isCorrect &&
                                              selectedAnswers[index] === key
                                                ? 'bg-green-200'
                                                : selectedAnswers[index] === key
                                                ? 'bg-red-200'
                                                : ''
                                            : ''
                                    }`}
                                >
                                    <input
                                        type='radio'
                                        name={`question-${index}`}
                                        value={key}
                                        checked={selectedAnswers[index] === key}
                                        onChange={() => !results && handleOptionChange(index, key)}
                                        disabled={!!results}
                                        className='mr-2'
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                    <br />
                </>
            ))}
            <button
                onClick={handleSubmit}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
            >
                Verificar
            </button>
            {results && (
                <div className='mt-4'>
                    <h2 className='text-xl font-bold'>Resultados</h2>
                    <p>Tu puntaje es: {results.score.toFixed(2)} / 5</p>
                </div>
            )}
        </div>
    )
}

QuizRenderer.propTypes = {
    quizData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            options: PropTypes.objectOf(PropTypes.string).isRequired,
            correctAnswer: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default QuizRenderer
