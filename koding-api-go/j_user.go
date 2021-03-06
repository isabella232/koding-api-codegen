/* 
 * Koding API
 *
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

import (
	"time"
)

type JUser struct {

	Id string `json:"_id,omitempty"`

	Username string `json:"username,omitempty"`

	OldUsername string `json:"oldUsername,omitempty"`

	Email string `json:"email,omitempty"`

	SanitizedEmail string `json:"sanitizedEmail,omitempty"`

	Password string `json:"password,omitempty"`

	Salt string `json:"salt,omitempty"`

	Twofactorkey string `json:"twofactorkey,omitempty"`

	BlockedUntil time.Time `json:"blockedUntil,omitempty"`

	BlockedReason string `json:"blockedReason,omitempty"`

	Status string `json:"status,omitempty"`

	PasswordStatus string `json:"passwordStatus,omitempty"`

	RegisteredAt time.Time `json:"registeredAt,omitempty"`

	RegisteredFrom JUserRegisteredFrom `json:"registeredFrom,omitempty"`

	LastLoginDate time.Time `json:"lastLoginDate,omitempty"`

	EmailFrequency interface{} `json:"emailFrequency,omitempty"`

	SshKeys interface{} `json:"sshKeys,omitempty"`
}
