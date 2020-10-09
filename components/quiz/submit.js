export default function Submit({isDisabled, isSubmitting}) {
  if (isDisabled && !isSubmitting) {
    return null
  }
  return (
    <button
      className="mt-4 px-3 py-2 rounded-md bg-gray-900 text-white"
      type="submit"
      disabled={isDisabled}
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  )
}
