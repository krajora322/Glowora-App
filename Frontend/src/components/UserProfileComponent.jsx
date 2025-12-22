import { useUsersProfileContext } from "../context/User.context";
import { GrEdit } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { useProductContext } from "../context/Products.context";
import { useAddressesContext } from "../context/Address.context";
import { useState } from "react";

export default function UserProfile() {
  const { usersData, usersLoading, usersError } = useUsersProfileContext();

  const {
    addresses,
    addressLoading,
    addressError,
    showCreateAddress,
    setShowCreateAddress,
    removeAddressHandler,
    isEditing,
    resetForm,
    submitError,
    changeHandler,
    submitHandler,
    handleEdit,
    handleCancel,
    handleSetDefault,
    formData,
    currentUser,
  } = useAddressesContext();

  const { navigate } = useProductContext();
  const [showAddress, setShowAddress] = useState(false);

  if (usersLoading) {
    return (
      <main className="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="spinner-border text-danger" />
        <p className="mt-3 fw-semibold">Loading your profile...</p>
      </main>
    );
  }

  if (usersError) {
    return (
      <main className="container py-5 text-center">
        <div className="alert alert-danger">
          Failed to load profile
        </div>
      </main>
    );
  }

  return (
    <main className="container py-4 mb-5">
      <h2 className="text-center text-md-start" style={{ color: "#f11c58ff" }}>
        My Profile
      </h2>
      <hr />

      <div className="card shadow border-0">
        <div className="card-body">
          {usersData?.data?.users?.map((user) => {
            const defaultAddress =
              user?.address?.find((a) => a?.isDefault) || null;

            return (
              <div key={user._id} className="row align-items-center">
                {/* LEFT */}
                <div className="col-md-4 text-center">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="rounded-circle shadow"
                    style={{ width: "180px", height: "180px", objectFit: "cover" }}
                  />
                  <h4 className="mt-3">{user.name}</h4>
                  <p className="text-muted">{user.username}</p>
                </div>

                {/* RIGHT */}
                <div className="col-md-8">
                  <div className="row g-3">
                    <Info label="Gender" value={user.gender} />
                    <Info label="Mobile" value={user.phoneNo} />
                    <Info label="Email" value={user.emailId} />
                    <Info
                      label="Account Created"
                      value={new Date(user.accountCreated).toLocaleString("en-IN")}
                    />

                    <div className="col-12">
                      <strong style={{ color: "#f11c58ff" }}>
                        Delivery Address
                      </strong>
                      <p className="mb-0">
                        {defaultAddress ? (
                          <>
                            {defaultAddress.street}
                            {defaultAddress.landmark &&
                              `, ${defaultAddress.landmark}`}
                            {`, ${defaultAddress.city}, ${defaultAddress.state} - ${defaultAddress.zipCode}`}
                          </>
                        ) : (
                          <span className="text-muted">
                            No default address set
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="row mt-4">
        <div className="col-md-6 mb-2">
          <button
            className="btn w-100 text-white"
            style={{ background: "#f11c58ff" }}
            onClick={() => navigate("/orders")}
          >
            View Orders
          </button>
        </div>

        <div className="col-md-6 mb-2">
          <button
            className="btn w-100 text-white"
            style={{ background: "#f11c58ff" }}
            onClick={() => setShowAddress(!showAddress)}
          >
            Manage Addresses
          </button>
        </div>
      </div>

      {/* ADDRESS SECTION */}
      {showAddress && (
        <>
          <h4 className="mt-4">Saved Addresses</h4>

          {addresses?.filter(Boolean)?.length > 0 ? (
            addresses
              .filter(Boolean)
              .map((address) => (
                <div key={address._id} className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h6>
                      {address.fullName}
                      {address.isDefault && (
                        <span className="badge bg-danger ms-2">Default</span>
                      )}
                    </h6>

                    <p>
                      <AiFillHome />{" "}
                      {address.street}, {address.city}, {address.state}
                    </p>

                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleEdit(address)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger me-2"
                      onClick={() => removeAddressHandler(address._id)}
                    >
                      Delete
                    </button>

                    {!address.isDefault && (
                      <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() =>
                          handleSetDefault(currentUser?._id, address._id)
                        }
                      >
                        Set Default
                      </button>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <div className="alert alert-info">
              No saved addresses found
            </div>
          )}
        </>
      )}
    </main>
  );
}

/* SMALL HELPER */
function Info({ label, value }) {
  return (
    <div className="col-md-6">
      <strong style={{ color: "#f11c58ff" }}>{label}</strong>
      <p className="mb-0">{value || "-"}</p>
    </div>
  );
}
