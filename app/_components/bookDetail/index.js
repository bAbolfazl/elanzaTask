const BookDetail = ({ data }) => {
  return (
    <div className="">
      <div className="mb-4">
        <span className="text-gray">Name:</span> {data?.name}
      </div>
      <div className="mb-4">
        <span className="text-gray">Email:</span> {data?.email}
      </div>
      <div className="mb-4">
        <span className="text-gray">Username:</span> {data?.username}
      </div>
      <div className="mb-4">
        <span className="text-gray">Website:</span> {data?.website}
      </div>
      <div className="mb-4">
        <span className="text-gray">Phone:</span> {data?.phone}
      </div>
      <div className="mb-4">
        <span className="text-gray">Address:</span> {data?.address?.street},
        {data?.address?.city}
      </div>
      <div className="mb-4">
        <span className="text-gray">Company:</span> {data?.company?.name}
      </div>
    </div>
  );
};

export default BookDetail;
